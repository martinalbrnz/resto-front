import { Role } from "@models/Role";
import { Staff } from "@models/Staff.model";

export const staff: Staff[] = [
	{ id: '1', name: 'Olivia', lastName: 'Swift', role: Role.Manager },
	{ id: '2', name: 'Ariel', lastName: 'Rodriguez', role: Role.Waiter },
	{ id: '3', name: 'Tamara', lastName: 'Picadillo', role: Role.Cook },
	{ id: '4', name: 'Rodrigo', lastName: 'Sirope', role: Role.Waiter },
	{ id: '5', name: 'Sally', lastName: 'Albano', role: Role.Cook },
	{ id: '6', name: 'Adam', lastName: 'Castro', role: Role.Waiter },
]
