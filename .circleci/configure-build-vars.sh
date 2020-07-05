#!/bin/bash

if [ "$CIRCLE_BRANCH" == "prod" ]; then
    echo "Setting production URLS..."
    echo "export API_BASE_URL=$PROD_API_BASE_URL" >> $BASH_ENV
    echo "export CYPRESS_API_BASE_URL=$PROD_API_BASE_URL" >> $BASH_ENV
    echo "export SENTRY_ENVIRONMENT=$CIRCLE_BRANCH" >> $BASH_ENV
elif [ "$CIRCLE_BRANCH" == "staging" ]; then
    echo "Setting staging URLS..."
    echo "export API_BASE_URL=$STAGING_API_BASE_URL" >> $BASH_ENV
    echo "export CYPRESS_API_BASE_URL=$STAGING_API_BASE_URL" >> $BASH_ENV
    echo "export SENTRY_ENVIRONMENT=$CIRCLE_BRANCH" >> $BASH_ENV
else
    echo "Setting dev URLS..."
    echo "export API_BASE_URL=$DEV_API_BASE_URL" >> $BASH_ENV
    echo "export CYPRESS_API_BASE_URL=$DEV_API_BASE_URL" >> $BASH_ENV
    echo "export SENTRY_ENVIRONMENT=dev" >> $BASH_ENV
fi

# Always set the current git hash and short hash used for release
echo "export SENTRY_RELEASE_GIT_HASH=$(git rev-parse --short HEAD)" >> $BASH_ENV
echo "export SHORT_GIT_HASH=$(echo $CIRCLE_SHA1 | cut -c -7)" >> $BASH_ENV
