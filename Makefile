install:
	npm ci
	npm link

gendiff:
	node bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .	

test: # Run tests
	npm test

test-watch: # Run tests with watch
	npm test -s -- --watch

test-coverage: # Run coverage tests
	npm test -- --coverage --coverageProvider=v8
	