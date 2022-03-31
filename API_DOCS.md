## AUTHENTICATED REQUESTS

- [Authenticated requests with firebase token](#authenticated-requests-with-firebase-token)

## API DOCUMENTATION

- [Users collection](#users-collection)

  - [1. Create a user](#1-create-a-user)
  - [2. Update a user](#2-update-a-user)
  - [3. Delete a user](#3-delete-a-user)
  - [4. Get a user](#4-get-a-user)
  - [5. Get users](#5-get-users)

- [Roles collection](#roles-collection)

  - [1. Create a role](#1-create-a-role)
  - [2. Update a role](#2-update-a-role)
  - [3. Delete a role](#3-delete-a-role)
  - [4. Get a role](#4-get-a-role)
  - [5. Get roles](#5-get-roles)

- [Clients collection](#clients-collection)

  - [1. Create a client](#1-create-a-client)
  - [2. Update a client](#2-update-a-client)
  - [3. Delete a client](#3-delete-a-client)
  - [4. Get a client](#4-get-a-client)
  - [5. Get clients](#5-get-clients)

- [Projects collection](#projects-collection)

  - [1. Create a project](#1-create-a-project)
  - [2. Update a project](#2-update-a-project)
  - [3. Delete a project](#3-delete-a-project)
  - [4. Get a project](#4-get-a-project)
  - [5. Get projects](#5-get-projects)

- [Activities collection](#activities-collection)

  - [1. Create an activity](#1-create-an-activity)
  - [2. Update an activity](#2-update-an-activity)
  - [3. Delete an activity](#3-delete-an-activity)
  - [4. Get an activity](#4-get-an-activity)
  - [5. Get activities](#5-get-activities)

- [Project memberships collection](#project-memberships-collection)

  - [1. Create a project membership](#1-create-a-project-membership)
  - [2. Update a project membership](#2-update-a-project-membership)
  - [3. Delete a project membership](#3-delete-a-project-membership)
  - [4. Get a project membership](#4-get-a-project-membership)
  - [5. Get project memberships](#5-get-project-memberships)

- [Timesheets collection](#timesheets-collection)

  - [1. Create a timesheet](#1-create-a-timesheet)
  - [2. Update a timesheet](#2-update-a-timesheet)
  - [3. Delete a timesheet](#3-delete-a-timesheet)
  - [4. Get a timesheet](#4-get-a-timesheet)
  - [5. Get timesheets](#5-get-timesheets)
  - [6. Get timesheet week by date](#6-get-timesheet-week-by-date)

- [Time items collection](#time-items-collection)

  - [1. Create a time item](#1-create-a-time-item)
  - [2. Update a time item](#2-update-a-time-item)
  - [3. Delete a time item](#3-delete-a-time-item)
  - [4. Get a time item](#4-get-a-time-item)
  - [5. Get time items](#5-get-time-items)

- [Timesheet pages](#timesheet-pages)

  - [1. Timesheet approve page](#1-timesheet-approve-page)

# Authenticated requests with firebase token

```json
{
  // Request header variable
  "Authorization": "xncvlheruehfsv456sdkhbfg786iu2341lwerhiweg234532p80243jo8fu84rjkgisdt782r"
}
```

# Users collection

### 1. Create a user

##### Operation

```graphql
mutation CreateUser($user: newUserInput!) {
  user: createUser(user: $user) {
    id
    email
    firstName
    lastName
    photo
    timezone
    memberships {
      id
      project {
        name
        spent
        budget
        status
      }
    }
  }
}
```

##### Variables

```json
{
  "user": {
    "email": "logan_777@mail.com",
    "firstName": "Logan",
    "lastName": "Paul",
    "photo": "data:image/png;base64,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",
    "timezone": "GMT +5"
  }
}
```

### 2. Update a user

##### Operation

```graphql
mutation UpdateUser($user: updateUserInput) {
  user: updateUser(user: $user) {
    id
    email
    firstName
    lastName
    photo
    timezone
    memberships {
      id
      role
      project {
        name
        id
        client {
          name
          description
          id
        }
        description
        spent
        budget
        status
      }
    }
  }
}
```

##### Variables

```json
{
  "user": {
    "id": "317329815600365764",
    "email": "your_email@mail.com",
    "firstName": "Nurbek",
    "lastName": "Ismoilov",
    "photo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkCAIAAADxLsZiAAAF1ElEQVR4nOzXsa3iQBhG0WVF5rbchetzFy5qEuebbQFPvBngntPA/0mIq/FzjPEH4Nv9XT0AYAaxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEp6rB3yw+zpXT3i9bT9WT3glvxH/edkBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJjzHGnEv3dc45BHyWbT8mXPGyAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyAhMcYY/UG3sV9nasnvN62H6sn8Ba87IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IOE57dJ9ndNuTbPtx+oJtPgf/di82PH+tJsv5jMWSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IeIwxVm8A+HVedkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QMK/AAAA//852iE4b5IHzAAAAABJRU5ErkJggg==",
    "timezone": "GMT +10"
  }
}
```

### 3. Delete a user

##### Operation

```graphql
mutation DeleteUser($userId: ID!) {
  user: deleteUser(userId: $userId) {
    id
    email
    firstName
    lastName
    photo
    timezone
    memberships {
      id
      project {
        name
        spent
        budget
        status
      }
      role
      startDate
      endDate
    }
  }
}
```

##### Variables

```json
{
  "userId": "318532718604320963"
}
```

### 4. Get a user

##### Operation

```graphql
query User($userId: ID!) {
  user: getUser(userId: $userId) {
    id
    email
    firstName
    lastName
    photo
    timezone
    memberships {
      id
      role
      project {
        id
        name
        client {
          id
          name
          description
        }
        description
        spent
        budget
        status
      }
      startDate
      endDate
    }
  }
}
```

##### Variables

```json
{
  "userId": "317329815600365764"
}
```

### 5. Get users

##### Operation

```graphql
query Query($pagination: pagination) {
  users: getUsers(pagination: $pagination) {
    data {
      id
      email
      firstName
      lastName
      photo
      timezone
      memberships {
        id
        startDate
        endDate
        role
        project {
          id
          client {
            id
            name
          }
          name
          description
          spent
          budget
          status
        }
      }
    }
    pagination {
      size
      after
      before
      total
    }
  }
}
```

##### Variables

```json
{
  "pagination": {
    "size": 2
  }
}
```

# Roles collection

### 1. Create a role

##### Operation

```graphql
mutation Mutation($role: newRoleInput!) {
  createRole(role: $role) {
    id
    name
  }
}
```

##### Variables

```json
{
  "role": {
    "name": "Backend Developer"
  }
}
```

### 2. Update a role

##### Operation

```graphql
mutation UpdateRole($role: updateRoleInput) {
  updateRole(role: $role) {
    id
    name
  }
}
```

##### Variables

```json
{
  "role": {
    "id": "325613513286353093",
    "name": "Backend Developer"
  }
}
```

### 3. Delete a role

##### Operation

```graphql
mutation DeleteRole($roleId: ID!) {
  deleteRole(roleId: $roleId) {
    id
    name
  }
}
```

##### Variables

```json
{
  "roleId": "325613513286353093"
}
```

### 4. Get a role

##### Operation

```graphql
query Query($roleId: ID!) {
  getRole(roleId: $roleId) {
    id
    name
  }
}
```

##### Variables

```json
{
  "roleId": "325613513286353093"
}
```

### 5. Get roles

##### Operation

```graphql
query Query($pagination: pagination) {
  getRoles(pagination: $pagination) {
    data {
      id
      name
    }
    pagination {
      size
      after
      before
      total
    }
  }
}
```

##### Variables

```json
{
  "pagination": {
    "size": 10
  }
}
```

# Clients collection

## 1. Create a client

##### Operation

```graphql
mutation CreateClient($client: newClientInput!) {
  client: createClient(client: $client) {
    id
    name
    description
    projects {
      id
      name
      description
      spent
      budget
      status
      memberships {
        id
        startDate
        endDate
      }
    }
  }
}
```

##### Variables

```json
{
  "client": {
    "name": "Abraham Lincoln",
    "description": "Very smart person"
  }
}
```

### 2. Update a client

##### Operation

```graphql
mutation UpdateClient($client: updateClientInput) {
  client: updateClient(client: $client) {
    id
    name
    description
    projects {
      id
      name
      description
      spent
      budget
      status
    }
  }
}
```

##### Variables

```json
{
  "client": {
    "id": "318606868920402117",
    "name": "Abraham Lincoln",
    "description": "Innovator, maybe proffessor"
  }
}
```

### 3. Delete a client

##### Operation

```graphql
mutation DeleteClient($clientId: ID!) {
  client: deleteClient(clientId: $clientId) {
    id
    name
    description
    projects {
      id
      name
      description
      spent
      budget
      status
    }
  }
}
```

##### Variables

```json
{
  "clientId": "318606868920402117"
}
```

### 4. Get a client

##### Operation

```graphql
query Client($clientId: ID!) {
  client: getClient(clientId: $clientId) {
    id
    name
    description
    projects {
      id
      name
      description
      spent
      budget
      status
    }
  }
}
```

##### Variables

```json
{
  "clientId": "318459455275532485"
}
```

### 5. Get clients

##### Operation

```graphql
query Clients($pagination: pagination, $filters: clientFilters) {
  clients: getClients(pagination: $pagination, filters: $filters) {
    data {
      id
      name
      description
      projects {
        id
        name
        description
        spent
        budget
        status
        activities {
          id
          name
        }
      }
    }
    pagination {
      size
      after
      before
      total
    }
  }
}
```

##### Variables

```json
{
  "pagination": {
    "size": 5
  },

  "filters": {
    "projectStatus": "ACTIVE",
    "clientName": "Searching client name or leave empty",
    "projectName": "Searching project name or leave empty"
  }
}
```

# Projects collection

### 1. Create a project

##### Operation

```graphql
mutation CreateProject($project: newProjectInput!) {
  project: createProject(project: $project) {
    id
    name
    description
    budget
    spent
    status
    client {
      id
      name
      description
    }
    memberships {
      id
      user {
        id
        firstName
        lastName
      }
      role
      startDate
      endDate
    }
    activities {
      id
      name
      costs
    }
    startDate
    endDate
  }
}
```

##### Variables

```json
{
  "project": {
    "name": "Best Coffee App",
    "description": "Cafe bar official mobile app.",
    "clientId": "317982224522674373",
    "budget": 18000,
    "status": "ACTIVE",
    "startDate": "2022-02-22T00:59:00.000Z",
    "endDate": "2022-09-22T23:59:59.000Z"
  }
}
```

### 2. Update a project

##### Operation

```graphql
mutation UpdateProject($project: updateProjectInput) {
  project: updateProject(project: $project) {
    id
    name
    description
    budget
    spent
    status
    client {
      id
      name
      description
    }
    activities {
      id
      name
      costs
    }
    memberships {
      id
      user {
        id
        firstName
        lastName
      }
      role
      startDate
      endDate
    }
    startDate
    endDate
  }
}
```

##### Variables

```json
{
  "project": {
    "id": "318653790375903428",
    "name": "My test project edited",
    "description": "My project is the best edited!",
    "clientId": "318459455275532485",
    "budget": 1000,
    "status": "ACTIVE",
    "startDate": "2022-02-22T00:59:00.000Z",
    "endDate": "2022-09-22T23:59:59.000Z"
  }
}
```

### 3. Delete a project

##### Operation

```graphql
mutation DeleteProject($projectId: ID!) {
  project: deleteProject(projectId: $projectId) {
    id
    name
    description
    spent
    budget
    status
    client {
      id
      name
      description
    }
    activities {
      id
      name
      costs
    }
    memberships {
      id
      user {
        id
        firstName
        lastName
      }
      role
      startDate
      endDate
    }
    startDate
    endDate
  }
}
```

##### Variables

```json
{
  "projectId": "318653790375903428"
}
```

### 4. Get a project

##### Operation

```graphql
query Project($projectId: ID!) {
  project: getProject(projectId: $projectId) {
    id
    name
    description
    spent
    budget
    status
    client {
      id
      name
      description
    }
    activities {
      id
      name
      costs
    }
    memberships {
      id
      user {
        id
        firstName
        lastName
      }
      role
      startDate
      endDate
    }
    startDate
    endDate
  }
}
```

##### Variables

```json
{
  "projectId": "318461206744531141"
}
```

### 5. Get projects

##### Operation

```graphql
query Projects($pagination: pagination, $filters: projectsFilters) {
  projects: getProjects(pagination: $pagination, filters: $filters) {
    data {
      id
      name
      description
      budget
      spent
      status
      client {
        id
        name
        description
      }
      activities {
        id
        name
        costs
        duration
      }
      memberships {
        id
        user {
          id
          firstName
          lastName
        }
        role
        startDate
        endDate
      }
      startDate
      endDate
    }
    pagination {
      size
      after
      before
      total
    }
  }
}
```

##### Variables

```json
{
  "pagination": {
    "size": 2
  },

  "filters": {
    "status": "ACTIVE",
    "name": "Searching project name or leave empty",
    "startDate": "2021-12-01T00:00:00Z",
    "endDate": "2022-08-31T00:00:00Z"
  }
}
```

# Activities collection

### 1. Create an activity

##### Operation

```graphql
mutation CreateActivity($activity: newActivityInput!) {
  activity: createActivity(activity: $activity) {
    id
    name
    costs
    duration
    project {
      id
      name
      description
      spent
      budget
      status
      client {
        id
        name
        description
        projects {
          id
          name
          description
          spent
          budget
        }
      }
      activities {
        id
        name
        costs
      }
      memberships {
        id
        user {
          id
          firstName
          lastName
        }
        role
        startDate
        endDate
      }
    }
  }
}
```

##### Variables

```json
{
  "activity": {
    "name": "Initialized new git repo",
    "projectId": "318458354851643589",
    "costs": 12.5
  }
}
```

### 2. Update an activity

##### Operation

```graphql
mutation UpdateActivity($activity: updateActivityInput!) {
  activity: updateActivity(activity: $activity) {
    id
    name
    costs
    duration
    project {
      id
      name
      description
      spent
      budget
      status
      client {
        id
        name
        description
        projects {
          id
          name
          description
          spent
          budget
          status
        }
      }
      activities {
        id
        name
        costs
      }
      memberships {
        id
        user {
          id
          firstName
          lastName
        }
        role
        startDate
        endDate
      }
    }
  }
}
```

##### Variables

```json
{
  "activity": {
    "id": "320527155195805891",
    "name": "Meetup about the project",
    "projectId": "318461206744531141",
    "costs": 17.5
  }
}
```

### 3. Delete an activity

##### Operation

```graphql
mutation Mutation($activityId: ID!) {
  activity: deleteActivity(activityId: $activityId) {
    id
    name
    costs
    duration
    project {
      id
      client {
        id
        name
        description
      }
      name
      description
      spent
      budget
      status
      activities {
        id
        name
        costs
      }
    }
  }
}
```

##### Variables

```json
{
  "activityId": "320527155195805891"
}
```

### 4. Get an activity

##### Operation

```graphql
query GetActivity($activityId: ID!) {
  activity: getActivity(activityId: $activityId) {
    id
    name
    costs
    duration
    project {
      id
      name
      description
      spent
      budget
      status
      client {
        id
        name
        description
      }
      activities {
        id
        name
        costs
      }
    }
  }
}
```

##### Variables

```json
{
  "activityId": "318665722787004611"
}
```

### 5. Get activities

##### Operation

```graphql
query GetActivities($pagination: pagination) {
  activities: getActivities(pagination: $pagination) {
    data {
      id
      name
      costs
      duration
      project {
        id
        name
        description
        spent
        budget
        status
        client {
          id
          name
          description
        }
        activities {
          id
          name
          costs
        }
      }
    }
    pagination {
      size
      after
      before
      total
    }
  }
}
```

##### Variables

```json
{
  "pagination": {
    "size": 10,
    "after": null,
    "before": null
  }
}
```

# Project memberships collection

### 1. Create a project membership

##### Operation

```graphql
mutation CreateProjectMembership(
  $projectMembership: newProjectMembershipInput!
) {
  projectMembership: createProjectMembership(
    projectMembership: $projectMembership
  ) {
    id
    user {
      id
      firstName
      lastName
      memberships {
        id
        role
        project {
          id
          name
          description
          spent
          budget
          status
        }
        startDate
        endDate
      }
    }
    role
    project {
      id
      name
      client {
        id
        name
        projects {
          id
          name
          description
          spent
          budget
        }
      }
      description
      spent
      budget
      status
    }
    startDate
    endDate
  }
}
```

##### Variables

```json
{
  "projectMembership": {
    "userId": "320343617408336067",
    "role": "MEMBER",
    "projectId": "318461206744531141",
    "startDate": "2021-08-20T01:28:27.594Z",
    "endDate": "2021-08-20T01:28:27.594Z"
  }
}
```

### 2. Update a project membership

##### Operation

```graphql
mutation UpdateProjectMembership(
  $projectMembership: updateProjectMembershipInput!
) {
  projectMembership: updateProjectMembership(
    projectMembership: $projectMembership
  ) {
    id
    user {
      id
      firstName
      lastName
      memberships {
        id
        role
        project {
          id
          name
          description
          spent
          budget
          status
        }
        startDate
        endDate
      }
    }
    role
    project {
      id
      name
      client {
        id
        name
        projects {
          id
          name
          description
          spent
          budget
        }
      }
      description
      spent
      budget
      status
    }
    startDate
    endDate
  }
}
```

##### Variables

```json
{
  "projectMembership": {
    "id": "320669381858164932",
    "userId": "320343617408336067",
    "role": "MEMBER",
    "projectId": "318461206744531141",
    "startDate": "2021-08-20T01:28:27.594Z",
    "endDate": "2021-08-20T01:28:27.594Z"
  }
}
```

### 3. Delete a project membership

##### Operation

```graphql
mutation DeleteProjectMembership($projectMembershipId: ID!) {
  projectMembership: deleteProjectMembership(
    projectMembershipId: $projectMembershipId
  ) {
    id
    user {
      id
      firstName
      lastName
      memberships {
        id
        role
        project {
          id
          name
          description
          spent
          budget
          status
        }
        startDate
        endDate
      }
    }
    role
    project {
      id
      name
      client {
        id
        name
        projects {
          id
          name
          description
          spent
          budget
          status
        }
      }
      description
      spent
      budget
      status
    }
    startDate
    endDate
  }
}
```

##### Variables

```json
{
  "projectMembershipId": "320553542487113924"
}
```

### 4. Get a project membership

##### Operation

```graphql
query Query($projectMembershipId: ID!) {
  projectMembership: getProjectMembership(
    projectMembershipId: $projectMembershipId
  ) {
    id
    user {
      id
      firstName
      lastName
      memberships {
        id
        role
        project {
          id
          name
          description
          status
        }
        startDate
        endDate
      }
    }
    role
    project {
      id
      name
      client {
        id
        name
        projects {
          id
          name
          description
          status
        }
      }
      description
      status
    }
    startDate
    endDate
  }
}
```

##### Variables

```json
{
  "projectMembershipId": "320740746535633096"
}
```

### 5. Get project memberships

##### Operation

```graphql
query GetProjectMemberships($pagination: pagination) {
  projectMemberships: getProjectMemberships(pagination: $pagination) {
    data {
      id
      user {
        id
        firstName
        lastName
        memberships {
          id
          role
          project {
            id
            name
            description
          }
          startDate
          endDate
        }
      }
      role
      project {
        id
        name
        client {
          id
          name
          projects {
            id
            name
            description
          }
        }
        description
      }
      startDate
      endDate
    }
    pagination {
      size
      after
      before
      total
    }
  }
}
```

##### Variables

```json
{
  "pagination": {
    "size": 10
  }
}
```

# Timesheets collection

### 1. Create a timesheet

##### Operation

```graphql
mutation CreateTimesheet($timesheet: newTimesheetInput!) {
  timesheet: createTimesheet(timesheet: $timesheet) {
    id
    user {
      id
      firstName
      lastName
    }
    startDate
    endDate
    status
    timeItems {
      id
      duration
      date
      project {
        id
        name
        description
        status
        client {
          id
          name
        }
      }
      activity {
        id
        name
        costs
      }
    }
  }
}
```

##### Variables

```json
{
  "timesheet": {
    "userId": "317329815600365764",
    "startDate": "2021-08-20T01:28:27.594Z",
    "endDate": "2021-08-20T01:28:27.594Z",
    "status": "CLEAN"
  }
}
```

### 2. Update a timesheet

##### Operation

```graphql
mutation UpdateTimesheet($timesheet: updateTimesheetInput!) {
  timesheet: updateTimesheet(timesheet: $timesheet) {
    id
    user {
      id
      firstName
      lastName
    }
    startDate
    endDate
    status
    timeItems {
      id
      duration
      date
      project {
        id
        name
        description
        status
        client {
          id
          name
        }
      }
      activity {
        id
        name
        costs
      }
    }
  }
}
```

##### Variables

```json
{
  "timesheet": {
    "id": "320743247830843591",
    "userId": "317329815600365764",
    "startDate": "2021-08-20T01:28:27.594Z",
    "endDate": "2021-08-20T01:28:27.594Z",
    "status": "CLEAN"
  }
}
```

### 3. Delete a timesheet

##### Operation

```graphql
mutation DeleteTimesheet($timesheetId: ID!) {
  timesheet: deleteTimesheet(timesheetId: $timesheetId) {
    id
    user {
      id
      firstName
      lastName
    }
    startDate
    endDate
    status
    timeItems {
      id
      duration
      date
      project {
        id
        name
        description
        status
        client {
          id
          name
        }
      }
      activity {
        id
        name
        costs
      }
    }
  }
}
```

##### Variables

```json
{
  "timesheetId": "320764893322019008"
}
```

### 4. Get a timesheet

##### Operation

```graphql
query Query($timesheetId: ID!) {
  timesheet: getTimesheet(timesheetId: $timesheetId) {
    id
    user {
      id
      firstName
      lastName
    }
    startDate
    endDate
    status
    timeItems {
      id
      duration
      date
      project {
        id
        name
        description
        status
        client {
          id
          name
        }
      }
      activity {
        id
        name
        costs
      }
    }
  }
}
```

##### Variables

```json
{
  "timesheetId": "320743247830843591"
}
```

### 5. Get timesheets

##### Operation

```graphql
query Query($pagination: pagination) {
  timesheets: getTimesheets(pagination: $pagination) {
    data {
      id
      user {
        id
        firstName
        lastName
      }
      startDate
      endDate
      status
      timeItems {
        id
        duration
        date
        project {
          id
          name
          description
          status
          client {
            id
            name
          }
        }
        activity {
          id
          name
          costs
        }
      }
    }
  }
}
```

##### Variables

```json
{
  "pagination": {
    "size": 10
  }
}
```

### 6. Get timesheet week by date

##### Operation

```graphql
query GetTimesheetWeek($date: Date!) {
  timesheet: getTimesheetWeek(date: $date) {
    id
    user {
      id
      firstName
      lastName
    }
    startDate
    endDate
    status
    timeItems {
      id
      duration
      date
      project {
        id
        name
        description
        status
        client {
          id
          name
        }
      }
      activity {
        id
        name
        costs
      }
    }
  }
}
```

##### Variables

```json
{
  "date": "2022-03-25T01:28:27.594Z"
  // If timesheet has not been created yet it return null

  // Otherwise
  // Returns timesheet from monday and sunday interval
  // For example, timesheet "startDate" = "2022-03-21T00:00:00.000Z" and "endDate" = "2022-03-27T23:59:59.000Z"
}
```

# Time items collection

### 1. Create a time item

##### Operation

```graphql
mutation CreateTimeItem($timeItem: newTimeItemInput!) {
  timeItem: createTimeItem(timeItem: $timeItem) {
    id
    duration
    date
    notes
    timesheet {
      id
      startDate
      endDate
    }
    project {
      id
      name
      description
      status
      client {
        id
        name
      }
      memberships {
        id
        user {
          id
          firstName
          lastName
        }
        role
        startDate
        endDate
      }
    }
    activity {
      id
      name
      duration
    }
  }
}
```

##### Variables

```json
{
  "timeItem": {
    "projectId": "318461206744531141",
    "activityId": "318665722787004611",
    "duration": 100,
    "date": "2022-01-07T01:28:27.594Z",
    "notes": ""
  }
}
```

### 2. Update a time item

##### Operation

```graphql
mutation UpdateTimeItem($timeItem: updateTimeItemInput!) {
  timeItem: updateTimeItem(timeItem: $timeItem) {
    id
    duration
    date
    notes
    timesheet {
      id
      startDate
      endDate
    }
    project {
      id
      name
      description
      status
      client {
        id
        name
      }
      memberships {
        id
        user {
          id
          firstName
          lastName
        }
        role
        startDate
        endDate
      }
    }
    activity {
      id
      name
      duration
    }
  }
}
```

##### Variables

```json
{
  "timeItem": {
    "id": "320979973396496583",
    "projectId": "318459496225571013",
    "activityId": "318665722787004611",
    "duration": 500,
    "date": "2022-01-08T01:28:27.594Z",
    "notes": ""
  }
}
```

### 3. Delete a time item

##### Operation

```graphql
mutation DeleteTimeItem($timeItemId: ID!) {
  timeItem: deleteTimeItem(timeItemId: $timeItemId) {
    id
    duration
    date
    notes
    timesheet {
      id
      startDate
      endDate
    }
    project {
      id
      name
      description
      status
      client {
        id
        name
      }
      memberships {
        id
        user {
          id
          firstName
          lastName
        }
        role
        startDate
        endDate
      }
    }
    activity {
      id
      name
      duration
    }
  }
}
```

##### Variables

```json
{
  "timeItemId": "320979973396496583"
}
```

### 4. Get a time item

##### Operation

```graphql
query Query($timeItemId: ID!) {
  timeItem: getTimeItem(timeItemId: $timeItemId) {
    id
    duration
    date
    notes
    timesheet {
      id
      startDate
      endDate
    }
    project {
      id
      name
      description
      status
      client {
        id
        name
      }
      memberships {
        id
        user {
          id
          firstName
          lastName
        }
        role
        startDate
        endDate
      }
    }
    activity {
      id
      name
      duration
    }
  }
}
```

##### Variables

```json
{
  "timeItemId": "320764810484515008"
}
```

### 5. Get time items

##### Operation

```graphql
query Query($pagination: pagination) {
  timeItems: getTimeItems(pagination: $pagination) {
    data {
      id
      duration
      date
      notes
      timesheet {
        id
        startDate
        endDate
      }
      project {
        id
        name
        description
        status
        client {
          id
          name
        }
        memberships {
          id
          user {
            id
            firstName
            lastName
          }
          role
          startDate
          endDate
        }
      }
      activity {
        id
        name
        duration
      }
    }
    pagination {
      size
      after
      before
      total
    }
  }
}
```

##### Variables

```json
{
  "pagination": {
    "size": 10
  }
}
```

# Timesheet pages

### 1. Timesheet approve page

##### Operation

```graphql
query Query($timesheetId: ID!) {
  timesheet: getTimesheet(timesheetId: $timesheetId) {
    id
    pages {
      approve {
        pendingHours {
          project {
            id
            name
            client {
              id
              name
            }
          }
          activity {
            id
            name
          }
          totalDuration
          weekDays {
            day
            month
            year
            date
            dayOfWeek
            duration
          }
        }
        details {
          day
          month
          year
          date
          dayOfWeek
          totalDuration
          list {
            project {
              id
              name
              client {
                id
                name
              }
            }
            activity {
              id
              name
            }
            duration
          }
        }
      }
    }
  }
}
```

##### Variables

```json
{
  "timesheetId": "324133497274892485"
}
```
