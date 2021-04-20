
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)


# Git MVP

Git MVP includes 4 main requirements:

## 1. Use `main` as your primary branch

You must use `main` as your primary branch, which is the default when creating a new repository. 

**Why?**

- Branching from the branches other than the `main` branch can create opportunities for merge conflicts.

![xkcd comic strip](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F34cad8a0-ac49-47de-b709-a007dd8fef51%2Fgit_comic.png?table=block&id=c2e18cb4-b075-4f9b-babf-9f681406f5f4&width=670&userId=eb1173b7-8514-41fd-8b4e-35da4a4051f9&cache=v2)

## 2. Feature Branch Naming

Feature branches must be named: `feature/<descriptive name>`

For example, if you're working on a feature that allows users to change the email address in their profile, the branch should be named `feature/change-email`

More info on branches and how to create a branch can be found [here](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).

**Why**?

- Without a good naming convention, it is very easy to lose track of the purpose of a branch.

## 3. Delete Merged Branches

After a branch has been merged to the `main` branch, it must be immediately deleted.

**Why?**

- Short-lived branches are a best-practice for minimizing merge conflicts. Leaving many branches active in a repository makes it difficult for team members to navigate the on-going work. Once a branch has been reviewed, approved, and merged into the `main` branch, it should be immediately deleted.
- A healthy Git repository has a minimum of active branches.
- This is [easy to comply with using GitHub](https://help.github.com/en/github/administering-a-repository/managing-the-automatic-deletion-of-branches).

## 4. Build Sprint Git Workflow

*Following this workflow make it easier to collaborate with your teammates. It will also help prepare you for Labs, since it is very similar to the Git workflow you will use in Labs!* 

**The idea is that each Trello card should be on its own pull request as a feature!**

The Build Sprint Git Workflow is designed to prepare you for your Labs experience. You can learn more about Git & GitHub in Labs, check out the [Engineering Standards](https://labs.lambdaschool.com/) and [Labs Git Workflow.](https://docs.labs.lambdaschool.com/guides/coding/git-workflow)

## Getting Started

You're ready to work on a new Trello card - let's get started!

**WITHOUT FORKING,** clone your team's repository. 
After that always make sure you start with a recent copy of the repo.

### `> git checkout main`

### `> git pull origin main`

- To get started on your first task let’s make a branch. Making sure you are on the `main` branch, start a new branch with a name that matches or correlates to the task you are about to begin.
- The trick here is to think beyond yourself when naming the branch, stay aligned with your Trello board so you ***and*** others can easily make sense of it.

```jsx
git checkout -b [*feature/<descriptive name>*]
```

## Sharing Is Good

Now you have a branch to make all your awesome commits to! 

- Copying the description from the Trello card, which should summarize the actual work in the PR, create a **Draft Pull Request** using the `main`branch as the **base** after you have made your first commit.

Github created pull request drafts so that notifications will be turned off by default until you decide you are ready for review.  

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87c9c898-bd08-4647-81a8-570abffd7680/draftPR.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/87c9c898-bd08-4647-81a8-570abffd7680/draftPR.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210419T195943Z&X-Amz-Expires=86400&X-Amz-Signature=e2d891ee619da1a7e7c932bc4dab60251774934ba331202d301c9f67be85f5d5&X-Amz-SignedHeaders=host)

## We have lift off!   🚀

Now we’re ready to make some awesome software. Committing and pushing our code regularly are habits worth having. Before we know it, we’ll be ready to take the PR out of draft mode.

Tip: do your best to be a great team member by making commit messages as clear as possible. They don’t have to be elaborate- keep it to the point.

### One small step  👨🏾‍🚀

When you feel you’ve completed the task you’ve been working on, it's time to: 

- Update the description
- Take the PR out of Draft Mode
- Make it "**ready for review**".

Ask someone in your team's channel to review your work. 

 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0d52265e-945c-48a3-8f28-7746c0dee8d1/github-ready-pr.png](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d52265e-945c-48a3-8f28-7746c0dee8d1%2Fgithub-ready-pr.png?table=block&id=78bb91a2-f594-47e0-8d95-db2d3b7ea605&width=1560&userId=eb1173b7-8514-41fd-8b4e-35da4a4051f9&cache=v2)

The team will then be notified of the PR and they can begin a review before merging it to the `main` branch.

Tip: Follow the team policy regarding the number of reviewers required before merging. It’s great practice to take the time and make comments in the code, even if just positive notes on good work your teammate did.

## Merging to `main`

If there are no conflicts to be resolved in the code choose `Rebase and merge` or `Squash and merge` from the `Merge` button.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/965d34e2-2e61-4994-926b-8fe6843d2194/github-merge.png](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F965d34e2-2e61-4994-926b-8fe6843d2194%2Fgithub-merge.png?table=block&id=73c7615d-1fa1-4e06-8ac1-a947a1903ec9&width=1760&userId=eb1173b7-8514-41fd-8b4e-35da4a4051f9&cache=v2)

If you find yourself with a merge conflict, there are a number of ways to solve it. The Github tools are very handy. You can also do it locally. When going down the local path, there is a good set of instructions [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges).

Your code changes are now on the `main` branch, ready to *wow!* users with your updates. 
Deploy your code (if not otherwise handled by Github Events) and be ready to support and address any issues that arise.

In order to invite your team to your new Github organization, you will need their Github usernames. 





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////        GITHUB ORGANIZATION
/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## 1. Create the Github Organization

You will create the Github organization that the team will work with for their Build Week project. 

Once you have logged into your Github account, click the `+` button and select `New Organization` in the top-right corner of the homepage. 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc57183c-653e-4bbf-a835-22e7b47bcd52/github_free.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc57183c-653e-4bbf-a835-22e7b47bcd52/github_free.png)

Choose the "free" tier for you organization.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/235b110a-a1c1-4b5d-9bfd-811335917f56/Screen_Shot_2020-04-22_at_12.09.13_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/235b110a-a1c1-4b5d-9bfd-811335917f56/Screen_Shot_2020-04-22_at_12.09.13_PM.png)

Creating a new organization on your account.

Select the `Free` plan. 

You will now choose the name for your Github organization. Use the convention `Build Week <Project Name>` and specify the organization belongs to `My personal account`.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d4a11b3d-4168-4908-bf34-b72fae930dfd/Screen_Shot_2020-04-22_at_12.11.11_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d4a11b3d-4168-4908-bf34-b72fae930dfd/Screen_Shot_2020-04-22_at_12.11.11_PM.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5bf8c32c-6d5f-419d-82ab-418fc2adbca8/skip_this_step.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5bf8c32c-6d5f-419d-82ab-418fc2adbca8/skip_this_step.png)

After you complete this step, you will be prompted to invite additional members. Skip this for now- you will be inviting people shortly and will be able to adjust their default permissions at the same time.

## 2. Create your first repository

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dee5b62c-d2be-4949-894f-f70da7daf4e8/create_new.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dee5b62c-d2be-4949-894f-f70da7daf4e8/create_new.png)

Creating a new repository.

Now that you've established the organization, you will need to create individual repos. 

Let's create a new repository for the front end. Note that we will repeat this process for the back end.

Specify the repo name. In this case, we will choose `front-end`. By default, repositories will be set to `private` but we will switch this to `public`. Select `initialize this repository with a README` and make sure to select an `MIT License`.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3273b62e-e980-42dd-b136-342d046aab07/create_new_repo.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3273b62e-e980-42dd-b136-342d046aab07/create_new_repo.png)

Specifying the details of your new repository.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ef199e6-02a8-41c8-9626-a6d8a2f6667d/settings.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ef199e6-02a8-41c8-9626-a6d8a2f6667d/settings.png)

The newly-created repository.

Once you have finished creating your repository, head over into the `settings`.

From there, we will select `Branches` and click on `Add rules`.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c76990ab-d6f2-4c06-8a2e-bf2139f7dac1/branch.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c76990ab-d6f2-4c06-8a2e-bf2139f7dac1/branch.png)

Manage the branch settings.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9a46a02d-ace4-4f3f-9c26-34be4733f395/branch_2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9a46a02d-ace4-4f3f-9c26-34be4733f395/branch_2.png)

Modifying the front end branch protections.

Now we will modify some details on the `front end` branch. 

First, name the branch name pattern to `main`. 

Next, enable `Require pull request reviews before merging` and specify the `Required approving reviews` to 1, so as to ensure a minimum of one team member will have to approve a pull request before it can be merged into `main`. 

When these have been set, click on the `Create` button below.

You will have to repeat this process to establish all of your other repositories, i.e. `backend`, `DS`, etc.

## 3. Invite the team to the repository

Now that we have created the repositories, you will begin to invite our team members. Make sure to invite your team to each repository, so as to ensure access across the organization.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bfaf1119-ab87-48f2-b227-ba411008f147/Screen_Shot_2020-04-22_at_12.21.37_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bfaf1119-ab87-48f2-b227-ba411008f147/Screen_Shot_2020-04-22_at_12.21.37_PM.png)

The Manage Access settings in the front end repo.

Back in the repository settings, select `Manage access` from the left-hand menu and click on `Invite teams or people`.

Provide the names of your team members and give them each `Admin` access.
