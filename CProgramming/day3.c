#include<stdio.h>


int main(){

    int n,table=0;
    printf("Enter table of any number : ");
    scanf("%d",&n);

    int i=1;

    // for( i=1;i<=10;i++){
    //     table=n*i;
    //     printf("%d * %d = %d \n",i,n,table);
    // }

    while(i<=10){
        table=n*i;
        printf("%d * %d = %d \n",i,n,table);
        i++;
    }
    


   

    return 0;
}