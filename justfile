format:
    npm run format

[env("BASE_PATH", "/persona-guide")]
build:
    npm run build

build_dir := "build/"
deploy_dir := ".gh-pages/"

publish: build
    rsync -a --delete --exclude .git {{ build_dir }} {{ deploy_dir }}
    git -C {{ deploy_dir }} add -A
    git -C {{ deploy_dir }} commit -m 'regenerated static'
    git -C {{ deploy_dir }} push
