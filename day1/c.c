#include<stdio.h>
#include<stdbool.h>

int main() {
    FILE *fptr;

    fptr = fopen("student.txt", "a+");
    if (fptr == NULL) {
        printf("Error opening file!\n");
        return 1;
    }
    bool cont = true;
    while (cont) {
        int choice;
        printf("Enter 1 to add a student, 2 to exit: \n");
        scanf("%d", &choice);
        if (choice == 1) {
          fprintf(fptr, "Student Name: ");
          char name[50];
          scanf(" %s", name);
          fprintf(fptr, "%s\n", name);
          printf("Enter phone number: \n");
          char phone[15];
          scanf(" %s", phone);
          fprintf(fptr, "Phone Number: %s\n", phone);
          printf("USN\n");
          char usn[15];
          scanf(" %s", usn);
          fprintf(fptr, "USN: %s\n", usn);
          printf("Department\n");
          char department[50];
          scanf(" %s", department);
          fprintf(fptr, "Department: %s\n\n", department);
        }
        else if (choice == 2){
          fclose(fptr);
          cont = false;
        }
        else {
            printf("Invalid choice. Please try again.\n");
        }
    }

}