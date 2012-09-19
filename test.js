#!/usr/bin/env sh
NODE_ENV=test mocha spec/ --recursive --require should
