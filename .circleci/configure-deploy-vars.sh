#!/bin/bash

if [ "$CIRCLE_BRANCH" == "staging" ]; then
    echo "Setting staging URLS..."
    echo "export DISTRIBUTION_ID=$STAGING_DISTRIBUTION_ID" >> $BASH_ENV
    echo "export S3_BUCKET_NAME=$STAGING_S3_BUCKET_NAME" >> $BASH_ENV
else
    echo "Setting dev URLS..."
    echo "export DISTRIBUTION_ID=$DEV_DISTRIBUTION_ID" >> $BASH_ENV
    echo "export S3_BUCKET_NAME=$DEV_S3_BUCKET_NAME" >> $BASH_ENV
fi
