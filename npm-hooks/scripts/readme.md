# npm install hooks

preinstall
install
postinstall

prepublish
preprepare
prepare
postprepare

https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install


## chmod +x / chmod 755

```sh
# chmod +x
$ chmod +x ./scripts/preinstall.sh
$ chmod +x ./scripts/install.sh
$ chmod +x ./scripts/postinstall.sh

$ chmod +x ./scripts/prepublish.sh
$ chmod +x ./scripts/preprepare.sh
$ chmod +x ./scripts/prepare.sh
$ chmod +x ./scripts/postprepare.sh

# 批量 folder
# $ chmod +x ./scripts/

$ chmod +x ./scripts/*.*

```