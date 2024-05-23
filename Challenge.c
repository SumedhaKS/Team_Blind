#include<stdio.h>
#include<stdlib.h>

// struct node{
//     struct node * left;
//     struct node * right;
//     int data;
// };

// struct node insert(struct node*){

// }


int main(){
    int count;
    int a[] = {27, 37, 87, 27, 37, 37, 52, 62, 9, 7, 3, 9};
    for(int i=0; i<12; i++){            //sorting
        for(int j=0; j<12-i-1; j++){
            if(a[j] > a[j+1]){
                int temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    for(int i=0; i<12; i++){
        printf("%d\t", a[i]);
    }        
    printf("\n");
    
    // for(int k=0, i=0; k< 12, i<12; i++){
    //         if(b[k] != a[i]){
    //             b[k] = a[i];
    //             k++;
    //             i++;
    //         }
    //         else{
    //             i++;
    //         }
    //     }
        //  for(int i=0; i<12; i++){
        // printf("%d\t", b[i]);
        // }    
int b[7];
int c;

    for(int i=0; i<12; i++){
        for(int j=1; j<12; j++){
            if(b[i] == a[j]){
                c++;
            }
            else{
                b[++i] = a[j];
                printf("%d -> %d", b[--i], c);
            }
        }
    }
//     for(int i=0; i<12; i++){            
//         for(int j=0; j<12-i-1; j++){
//             if(b[i] == a[j]){
//                 continue;
//             }
//             else{
//                 b[i] = a[j];
//             }

//     }
//   }
for(int i=0; i<12; i++){
        printf("%d\t", b[i]);
    }        
    printf("\n");

    for(int i=0; i<12; i++){            //counting
        for(int j=i+1; j<12; j++){
            if(a[i] == a[j]){
                count++;
            }
        }

    }
}

