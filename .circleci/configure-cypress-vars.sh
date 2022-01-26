#!/bin/bash

if [ "$CIRCLE_BRANCH" == "prod" ]; then
    echo "Setting production URLS..."
    echo "export CYPRESS_API_BASE_URL=$PROD_API_BASE_URL" >> $BASH_ENV
elif [ "$CIRCLE_BRANCH" == "staging" ]; then
    echo "Setting staging URLS..."
    echo "export CYPRESS_API_BASE_URL=$STAGING_API_BASE_URL" >> $BASH_ENV
else
    echo "Setting dev URLS..."
    echo "export CYPRESS_API_BASE_URL=$DEV_API_BASE_URL" >> $BASH_ENV
fi

echo "export CUCUMBER_TOKEN=$CUCUMBER_TOKEN" >> $BASH_ENV