// You get an array of objects of users from your database:
const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

// 1. Loop over the array with the forEach method and dynamically create an ordered list of the first and last names of the objects.
let ol=document.createElement("ol");
users.forEach((item)=>{
    let li = document.createElement("li");
    li.textContent = `${item.firstName} ${item.lastName}`;
    ol.appendChild(li);

    // 2. Remove the bullet points of the ordered list with JavaScript.
    li.style.listStyleType = "none";

    // 3. Create a custom data attribute called “data-id” and attach the id value to each li. Your markup should look like this:
    li.dataset['id'] = item.id;
})

document.body.appendChild(ol);



