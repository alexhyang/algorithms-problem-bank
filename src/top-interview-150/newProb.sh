#!/bin/bash

newProb() {
  if [[ $# -eq 0 ]]; then
    echo "newProb problemFileName functionName"
  else
    # copy files
    cp template.ts $1.ts
    cp template.test.txt $1.test.ts

    # update test file
    sed -i "s/functionName/$2/g" $1.test.ts
    sed -i "s/problemFileName/$1/g" $1.test.ts
  fi
}
