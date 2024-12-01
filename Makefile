default: package

package:
	mkdir -p dist
	zip -r dist/more-better-ctrlw.zip . -x 'dist/*' -x '.git*' -x 'tags' -x 'Makefile' -x '*.psd' -x '*.xcf' -x 'icons/better-ctrlw--*'

.PHONY: package
