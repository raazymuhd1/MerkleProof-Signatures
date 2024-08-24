-include .env

.PHONY: build coverage install deploy snapshot

build:; forge build

snapshot: forge snapshot

coverage:; forge coverage


