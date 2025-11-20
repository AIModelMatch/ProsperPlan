----------------------------------------------------------------------

Standard Ignore Rules for Node.js and React Applications

----------------------------------------------------------------------

Dependencies

/node_modules
/dist
/build
/out
/coverage
/public/build
/temp

Logs and Debugging

npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

Environment Variables and Security (CRITICAL to ignore)

.env
.env.local
.env.development.local
.env.production.local

Local development files

.DS_Store
*.seed
*.log
.vscode/

Vercel / Next.js Build Artifacts (Based on your chosen deployment)

.vercel/
/out/
.next/

Package Lock files (if you only use one package manager)

yarn.lock

package-lock.json

Test files and coverage

/test-reports/
/coverage/

Misc

*.swp
