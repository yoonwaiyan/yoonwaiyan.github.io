const ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'git@github.com:yoonwaiyan/yoonwaiyan.github.io.git'
    },
    () => {
        console.log('Deploy Complete!');
    }
);
