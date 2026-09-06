// Build and publish dist/ to the `gh-pages` branch (GitHub Pages, deploy-from-branch).
// Interim deploy path until the repo token has the `workflow` scope so Actions can take over.
//   node scripts/deploy.mjs
import { execSync } from 'node:child_process';
import { cpSync, writeFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const git = (args, cwd) => execSync(`git ${args}`, { stdio: 'inherit', cwd });

console.log('› building');
execSync('npm run build', {
  stdio: 'inherit',
  env: { ...process.env, PUBLIC_FORMSPREE_ID: process.env.PUBLIC_FORMSPREE_ID || 'xyeydknw' },
});
writeFileSync('dist/.nojekyll', '');

const wt = join(tmpdir(), `ghp-${Date.now()}`);
console.log('› publishing to gh-pages');
git('worktree prune');
git(`worktree add -B gh-pages "${wt}"`);
try {
  for (const entry of readdirSync(wt)) {
    if (entry !== '.git') rmSync(join(wt, entry), { recursive: true, force: true });
  }
  cpSync('dist', wt, { recursive: true });
  git('add -A', wt);
  try {
    git('commit -q -m "Deploy site"', wt);
  } catch {
    console.log('  (nothing to commit)');
  }
  execSync('git push -f origin gh-pages', {
    stdio: 'inherit',
    cwd: wt,
    env: {
      ...process.env,
      GIT_CONFIG_COUNT: '1',
      GIT_CONFIG_KEY_0: 'credential.https://github.com.helper',
      GIT_CONFIG_VALUE_0: '!gh auth git-credential',
    },
  });
} finally {
  git(`worktree remove "${wt}" --force`);
}
console.log('› done → https://antonydaewoospace.github.io/daewoo-space-landing/ (Pages tarda ~1 min)');
