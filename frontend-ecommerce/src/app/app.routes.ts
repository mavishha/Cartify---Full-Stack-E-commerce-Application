import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { JeansComponent } from './jeans/jeans.component';
import { HomemainComponent } from './homemain/homemain.component';
import { AdditemComponent } from './additem/additem.component';
import { CartComponent } from './cart/cart.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { RegisterComponent } from './register/register.component';



export const routes: Routes = [
    
   {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'

   },
   {
    path: 'home',
    component: HomeComponent,
    children:[
        {   path:'',
            component:HomemainComponent
        },
        {
            path:'women',
            children:[
                {
                    path:'jeans',
                    component:JeansComponent
                }
            ]
        },
        {
            path:'men',
            children:[
                {
                    path:'jeans',
                    component:JeansComponent
                }
            ]
        },

        {
        path:'additem',
        component:AdditemComponent
        }
    ]

    }
    ,
    {
        path:'login',
        component: LoginpageComponent
    },

    {
        path:'cart',
        component:CartComponent
    },
    {
        path:'edit',
        component:EditComponent
    },
    {
        path:'delete',
        component:DeleteComponent
    },
    {
        path:'register',
        component:RegisterComponent
    }
    
  

    
];
