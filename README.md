# mid
### 修改部分>>  
##### #在APP專案裡的img資料夾裡放置了四張圖，目前使用的是metromrt_03，其他也可以試試，個人覺得03效果比較好  
##### #components資料夾裡新增了MemberDetail.js，ShopDetail.js改成點擊資訊icon開啟手機裡的google map  
##### #json資料夾裡修改了icon.json，新增mapStyle.json、memberlist.json、metro.json  
##### #screens資料夾裡修改MemberScreen.js、StoreScreen.js，新增LoginScreen.js  
##### #App.js說明:  
第14行新增import LoginScreen from './src/screens/LoginScreen'  
第104行改成<Tab.Screen name="會員" component={MemberStack} />  
第157行後新增  
const MemberStack = () => {
  return (
   <Stack.Navigator>
     
        <Stack.Screen 
          name="會員" 
          component={MemberScreen} 
          options={{
          
            headerShown: false
          }}
        />
         <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{
           
            headerShown: false
          }}
        />
     
      </Stack.Navigator>
  );
}
