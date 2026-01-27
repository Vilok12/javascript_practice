const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably
let active_users=users.filter(e=>e.active==true)
console.log('active users',active_users)
let active_users_names=active_users.map(e=>e.name)
console.log('active users names',active_users_names)
let admin_user=users.filter(e=>e.role='admin')
console.log(admin_user)
let find_user=users.find(e=>e.id=1)
console.log(find_user)
let a=users.map(e=>e.id==1?e.active='false':null)
console.log(a)
