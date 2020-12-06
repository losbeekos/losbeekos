module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
