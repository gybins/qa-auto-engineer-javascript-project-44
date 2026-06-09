install:
	npm ci

brain-games:
	brain-games

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

brain-calc:
	brain-calc
	
brain-even:
	brain-even

brain-gcd:
	brain-gcd