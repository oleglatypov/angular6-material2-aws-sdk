#Code Contribution Specification

If you have any questions, please feel free to submit [issue](https://github.com/stbui/angular-material-app/issues).
Or modify the submission directly [PR](https://github.com/stbui/angular-material-app/pulls)!

## Submit issue

- Please determine the type of issue.
- Please avoid submitting duplicate issues and search for existing issues before committing.
- Express a clear intent in the label (category reference ** label classification**), title or content.

Tags can be divided into two categories, type and scope

- type: the type of issue, such as `feature`, `bug`, `documentation`, `performance`, `support` ...
- scope: modify the scope of the file, such as `core: xx`, `plugin: xx`, `deps: xx`

### Common label description

- The questions raised by `support`: issue require developers to collaborate on troubleshooting, consulting, debugging, and other day-to-day technical support.
- `bug`: Once you find a problem that may be a bug, please type `bug` and wait for confirmation. Once the bug is confirmed, the issue will be marked with `confirmed`.
  - The issue will be processed with a very high priority.
  - If this bug is affecting the normal operation of the online application, it will be marked with `critical`, which means it is the highest priority and needs to be processed immediately!
  - The bug will be fixed in the version that needs to be fixed at the minimum. If it is fixed in `0.9.x`, the latest version is `1.1.x`.
  Then this issue will be marked with `0.9`, `0.10`, `1.0`, `1.1`, which means that you need to fix these versions.

## Writing a document

All function points must submit supporting documents, the documents must meet the following requirements

- It must be clear about several aspects of the problem: what (what is), what (why), how (how to do it), depending on the nature of the problem.
The -how section must contain detailed and complete steps, and if necessary, ** sample code that is simple enough to run **
- Provide the necessary links, such as the application process, terminology explanations and reference documents.

## Submit code

### Submit Pull Request

If you have developer rights to the repository and want to contribute code, you can create a branch modification code to submit the PR, and the egg development team will review the code and merge it into the trunk.

```bash
# First create development branch development, branch name should have meaning, avoid using update, tmp, etc.
$ git checkout -b branch-name

# Run the test after the completion of the development, if necessary, you need to add or modify the test case
$ npm test

# After passing the test, submit the code, message see the specification below

$ git add . # git add -u Delete files
$ git commit -m "fix(role): role.use must xxx"
$ git push origin branch-name
```

Once submitted, you can create a Pull Request at [angular-material-app] (https://github.com/stbui/angular-material-app/pulls).

Since no one can guarantee how much it will be remembered after a long time, in order to facilitate the retrospective history, please provide the following information when submitting MR.

1. Demand point (generally associated issue or comment)
2. Reason for the upgrade (unlike the issue, you can briefly describe why you want to deal with it)
3. Frame test points (can be linked to test files, without detailed description, key points)
4. Points of interest (for users, there may be no, generally not compatible with updates, etc., additional prompts are required)

### Code Style

Your code style must pass eslint, you can run the `$ npm run lint` local test.

### Commit submission specification

Submit a commit according to the [angular specification] (https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit-message-format)
This way the history looks clearer and the changelog can be generated automatically.

```xml
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

(1)type

Submit the type of commit, including the following

- feat: new features
- fix: fix the problem
- docs: modify the document
- style: modify the code format without affecting the code logic
- refactor: Refactoring code, theoretically does not affect existing features
- perf: improve performance
- test: Add modification test case
- chore: modify tool related (including but not limited to documentation, code generation, etc.)
- deps: upgrade dependencies

(2)scope

Modify the scope of the file (including but not limited to doc, middleware, core, config, plugin)

(3) subject

Describe clearly what this submission did in one sentence

(4)body

Supplement the subject, and increase the relevant factors such as the cause and purpose, or write it.

(5) footer

- ** Must be clearly described here when there is a Breaking Change**
- Associate related issues, such as `Closes #1, Closes #2, #3`
- If the function point is added or modified, you need to associate the document `doc`

Example

```
Fix($compile): [BREAKING_CHANGE] couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
Not allow to user regexps for throw expectations.

Document change on #123

Closes #392

BREAKING CHANGE:

  Breaks foo.bar api, foo.baz should be used instead
```

See the specific [documentation] (https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)

## Release Management


### Branching strategy

The `master` branch is the currently stable release, and the `next` branch is the next major version of the development.

- Only two versions are maintained. Unless there are security issues, the fix will only patch to the `master` and `next` branches. Other updates push the upper framework to the latest version of the stable large version.
- Deprecation of all APIs requires a `deprecate` prompt on the current stable version and guarantees compatibility with the new version on the current stable version.
- The `master` branch does not set the publish tag, and the upper framework is based on the semver dependency stable version.
- The `next` branch setting tag is `next`, and the upper framework can be tested by reference to the version in development by `angular-material-app@next`.

### Publishing strategy

Every major version has a release manager management (PM), what he/she has to do

#### Ready to work:

- Create milestone, confirm the requirements associated with milestone, assign and update issues such as [1.x milestone].
- Create a new `next` branch from the `master` branch and set the tag to `next`.

#### Before posting:

- Confirm that all current Milestone issues are closed or deferred to complete performance testing.
- Initiate a new [Release Proposal MR], follow the [node CHANGELOG] to write `History`, fix the version-related content in the document, and commits can be generated automatically.
    ```bash
    $ npm run commits
    ```
- Specify the next major version of PM.

#### When publishing:

- Back up the old stable version (master) to the branch with the current major version (for example, `1.x`) and set the tag to `release-{v}.x` (v is the current version, for example ` Release-1.x`).
- Push the `next` branch to `master` to become the new stable version branch, and remove the `next` tag to modify the branch-related content in the README.
- Publish a new stable version to [npm] and notify the upper framework to update.
- Before 'npm publish`, please read ["How do I post an npm package"].

All of the set tags in the above description refer to the tag that sets npm in `package.json`.

```json
"publishConfig": {
  "tag": "next"
}
```
