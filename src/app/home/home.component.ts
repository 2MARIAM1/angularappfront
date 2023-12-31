import { Component } from '@angular/core';
import { Employee } from '../employee';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public employees!: Employee[] ;
  public editEmployee?: Employee;
  public deleteEmployee?: Employee;

   constructor(private employeeService: EmployeeService, private afAuth: AngularFireAuth, private router: Router){}

  ngOnInit(){
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(employee: Employee , mode: string): void { // RESPONSIBLE FOR CRUD BUTTONS ACTIONS -> DISPLAY FORMS
    const container = document.getElementById('main-container');
    const button   = document.createElement('button');
    button.type = 'button';  // IT IS SUBMIT BY DEFAULT
    button.style.display = 'none'; // WE DON T WANT THE SHOW THE BUTTON 
    

    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
     
      button.setAttribute('data-target', '#addEmployeeModal');
    }

    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById("add-employee-form")?.click();

    this.employeeService.addEmployee(addForm.value).subscribe(  // addEmployee : service calling the backend

      (response: Employee) => {
        console.log(response);
        this.getEmployees(); //RELOAD LIST
        addForm.reset();
      },

      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onUpdateEmloyee(employee: Employee): void {

    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onDeleteEmloyee(employeeId: number): void {

    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchEmployees(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const employee of this.employees) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

  logout() {
    this.afAuth.signOut().then(() => {
      // After logging out, navigate to the login page
      this.router.navigate(['/login']);
    });
  }
  
}
