const config = {
  branches: [
    'main',
    {
      name: 'crumbs-*',
      prerelease: true,
    },
  ],
  repositoryUrl: 'https://github.com/marshmallow-insurance/frames.git',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'bump', release: 'patch' },
          { type: 'dependabot', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'revert', release: 'patch' },
        ],
        parserOpts: {
          noteKeywords: [
            'BREAKING CHANGE',
            'BREAKING-CHANGE',
            'BREAKING CHANGES',
            'BREAKING-CHANGES',
          ],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug Fixes' },
            { type: 'docs', section: 'Documentation' },
            { type: 'bump', hidden: true },
            { type: 'dependabot', hidden: true },
            { type: 'style', section: 'Styles' },
            { type: 'refactor', section: 'Refactors' },
            { type: 'perf', section: 'Performance Improvements' },
            { type: 'test', section: 'Tests' },
            { type: 'revert', hidden: true },
            { type: '*', section: 'Others' },
          ],
        },
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: ['dist'],
      },
    ],
    ['@semantic-release/changelog'],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        pkgRoot: '.',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
}

export default config
