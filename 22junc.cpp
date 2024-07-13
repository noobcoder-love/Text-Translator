#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define uall unsigned long long
#define yes cout<<"YES"<<endl
#define no cout<<"NO"<<endl
#define noobcoder ios::sync_with_stdio(false);cin.tie(0), cout.tie(0); 


 int main(){
   noobcoder
     ll t=1;
     cin>>t;
     while(t--)
	 {
     int n;
     cin>>n;
     if(n>2){
      deque<int>three,four;
       three.push_back(1);
       three.push_back(3);
       three.push_back(2);
       four.push_back(2);
       four.push_back(1);
       four.push_back(4);
       four.push_back(3);
       vector<int>ans;
       if(n&1){
         yes;
         for(int i=4;i<=n;i+=2){
            three.push_front(i);
            three.push_back(i+1);
         }
         for(int i=0;i<n;i++)
           cout<<three[i]<<" ";
           cout<<endl;
       }
       else{
         yes;
         for(int i=5;i<n;i+=2){
            four.push_front(i);
            four.push_back(i+1);
         }
         for(int i=0;i<n;i++){
            cout<<four[i]<<" ";
         }
         cout<<endl;
       }
       
     }
     else
     no;
	 }
	return 0;
}
/*

int main(){
   noobcoder
     ll t=1;
     cin>>t;
     while(t--)
	 {
      ll n,m;
      cin>>n>>m;
      map<ll,ll>mp;
      for(int i=0;i<n;i++){
      	ll x;
      	cin>>x;
      	ll rem=x%m;
      	mp[rem]++;
	  }
	  ll ct=0;
	  for(int i=0;i<n;i++){
	  	ll y;
	  	cin>>y;
	  	ll rem1=y%m;
	  	ll res=(m-rem1)%m;
	  	if(mp.find(res)!=mp.end()){
	  		ct+=mp[res];
		  }
	  }
	  cout<<ct<<endl;
     
	 }
	return 0;
}
____ __ __ __ __ __ ___                             ___ __ __ __ __ __ ____
 `-._:  .:'   `:::  .:\           |\__/|           /::  .:'   `:::  .:.-'
     \      :          \          |:   |          /         :       /
      \     ::    .     `-_______/ ::   \_______-'   .      ::   . /
       |  :   :: ::'  :   :: ::'  :   :: ::'      :: ::'  :   :: :|
       |     ;::         ;::         ;::         ;::         ;::  |
       |  .:'   `:::  .:'   `:::  .:'   `:::  .:'   `:::  .:'   `:|
       /     :           :           :           :           :    \
      /______::_____     ::    .     ::    .     ::   _____._::____\
                    `----._:: ::'  :   :: ::'  _.----'
                           `--.       ;::  .--'
                               `-. .:'  .-'
                                  \    /
                                   \  /
                                    \/
*/


