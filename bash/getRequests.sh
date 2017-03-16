#!/bin/bash

set -e
set -u

# This is an example for the API endpoint:

# API_ENDPOINT="https://dev21026.service-now.com/api/98217/request_api/requests" \
curl $API_ENDPOINT \
  --request GET \
  --header "Accept:application/json" \
  --user $USER:$PASSWORD
