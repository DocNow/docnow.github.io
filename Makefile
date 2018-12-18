all: build dat

build:
	JEKYLL_ENV=production jekyll build

dat: build
	cd _site; dat sync
