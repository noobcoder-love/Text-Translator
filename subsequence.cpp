#include <bits/stdc++.h>
using namespace std;

void printF(int ind,vector<int>&ans,int arr[],int n){
     if(ind==n){
        for(auto it:ans){
            cout<<it<<" ";
        }
        cout<<endl;
        return;
     }
     ans.push_back(arr[ind]);
     printF(ind+1,ans,arr,n);
     ans.pop_back();
     printF(ind+1,ans,arr,n);

    
}
int main()
{
    int arr[]={3,1,2,4};
    int n=4;
    vector<int>ans;
    printF(0,ans,arr,n);
    
}