#include <bits/stdc++.h>
using namespace std;
int main()
{
    int t;
    cin>>t;
    while(t--){
        int n,k;
        cin>>n>>k;
        int a[n];
        int ans=0;
        vector<int>sum;
        for(int i=0;i<n;i++){
            cin>>a[i];
            ans|=a[i];
        }
        // cout<<ans<<endl;
        sum.push_back(ans);
        while(k--){
            int x,y;
            cin>>x>>y;
            a[x-1]=y;
            int res=0;
            for(int i=0;i<n;i++){
               res|=a[i];
            }
            // cout<<res<<endl;
            sum.push_back(res);
        }
        for(int i=0;i<sum.size();i++){
            cout<<sum[i]<<endl;
        }
    }
}