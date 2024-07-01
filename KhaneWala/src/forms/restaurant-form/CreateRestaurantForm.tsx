import { Form } from '@/components/ui/form';
import {useForm} from 'react-hook-form'
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LoadingButton from '../../components/LoadingButton';
import { Button } from '@/components/ui/button';
import DetailSection from './DetailSection';
import Cuisine from './Cuisine';

 
const RestaurantSchema=z.object({
    restaurantName:z.string().min(1,"name is required"),
    city:z.string().min(2,"City is required"),
    country:z.string().min(2,"Country is required"),
    deliveryPrice:z.coerce.number({
        required_error: "delivery price is required",
        invalid_type_error: "must be a valid number",
      }),
      estimatedDeliveryTime: z.coerce.number({
        required_error: "estimated delivery time is required",
        invalid_type_error: "must be a valid number",
      }),
      cuisines: z.array(z.string()).nonempty({
        message: "please select at least one item",
      }),
      menuItems: z.array(
        z.object({
          name: z.string().min(1, "name is required"),
          price: z.coerce.number().min(1, "price is required"),
        })
      ),
      imageUrl: z.string().optional(),
      imageFile: z.instanceof(File, { message: "image is required" }).optional(),
})

export type restaurantFormData=z.infer<typeof RestaurantSchema>;


type Props={
    onSave:(restaurantFormData:restaurantFormData)=> void;
    isLoading:boolean;
    title?:string;
}


export default function CreateRestaurantForm({onSave,title='Manage Restaurant',isLoading}:Props) {

const form=useForm<restaurantFormData>({
    resolver:zodResolver(RestaurantSchema),
    defaultValues:{
      cuisine:[]
    }
})

  return (
 <Form {...form}>
    <form className='space-y-4 bg-gray-50 rounded-lg md:p-10 mt-[35px]' onSubmit={form.handleSubmit(onSave)}>
<DetailSection/>
<Cuisine/>
    </form>
 </Form>
  )
}
