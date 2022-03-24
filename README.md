# Welcome to Purchase Order (PO) Task! 🤖

In this task we will build the the ❤️ functionality of [Approve.com](https://approve.com) - PO.

## Goal 🎯
**You goal is to implement the defined requirements to the best of your abilities and <u>gain as much points as you can</u>.**

## 01 Background
Approve is building the SaaS that allows everyone in the organization to have control and visibility over their purchases requests.

Purchase request when it is approved creates a purchase order (PO) that is sent to the vendor.


## 02 Task

### Description
We want to build a simple task that will allow us to create a purchase order (PO) for a purchase request.

You are requested to create a new service that will support the following actions:
* Create a new purchase.
* Get a purchase.

To create a new purchase the user should send the following fields:
* Item - `Item`. 
* Description - `string`.
* Quantity - `number`.

And `Item` contains:
* Name : `string`.
* Price: `number`.

### Mandatory Requirements:
#### Server side (`55` points in JS, `40` points in any other language) 
Create an api for the following actions :
* `CreatePurchase(purchase : Purchase ): Purchase`.	
* `GetPurchases(): List<Purchase>`.
* `GetPurchase(Id: String): Purchase`.

#### Client side (`25` points)
* Create a button to create/get purchase.
* Create a table that contains all the purchases. Each purchase should have:
    * ID - purchase order unique Id.
    * Item
    * Quantity
    * Amount - The total amount of this purchase

For example, I create a purchase to buy 2 apples and each apple costs $1, so the total amount should be $2.

Refreshing the browser won’t clear the purchases table.

### Extra requirements:
#### Persistence layer:
* In memory DB (`5` point)
* Local DB (`5` point)
* Remotely hosted DB (`10` points)

#### Caching layer:
* Please implement a in-memory cache layer to GetPurchase/s calls (`5` points)
* Api call to clear cache (`5` points)

#### Unit tests for the following actions:
* Create Purchase (`5` points)
* Get Purchase (`5` points)



## 03 Project
To run the project, you need to run server and client at the same time from 2 different terminals. Feel free to use other technologies, frameworks, etc.

### Client
Client code is located in `client` folder. It's based on [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

See instructions [here](./client)

### Server
Server is located in corresponding `server` folder.
See instructions [here](./server)