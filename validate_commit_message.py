#!/usr/bin/python
# -*- coding: utf-8 -*-
# v1.0.0-husky
import os
import re
import sys


def isCommitMessageValid(commit_message):
    pattern = r"\[#\d+\] [\u0000-\ufe0f]+ \([a-zA-Z\s\-]+\) .+"
    m = re.match(pattern, commit_message)
    return m is not None


def removeMessageComments(commit_message):
    cleaned_commit_message = ""
    for line in commit_message.splitlines():
        if line == "# ------------------------ >8 ------------------------":
            break
        if not line.startswith("#"):
            cleaned_commit_message = cleaned_commit_message + line + "\n"

    return cleaned_commit_message


def main():
    filename = os.environ['HUSKY_GIT_PARAMS']
    commit_message = open(filename, "r").read()
    commit_message = removeMessageComments(commit_message)

    if not isCommitMessageValid(commit_message):
        print("\n\n🚨 Commit message validation failed!")
        print("Here's what you tried:")
        print("-" * 36)
        print(commit_message)

        sys.exit(1)


if __name__ == "__main__":
    main()