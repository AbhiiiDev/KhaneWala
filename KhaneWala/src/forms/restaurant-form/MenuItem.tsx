import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFormContext } from 'react-hook-form';


type Props={
    index:number;
    removeMenuItem:()=>void;
}


export default function MenuItem({index,removeMenuItem}:Props) {
  
  const {control}=useFormContext();

    return (
    <div className='flex flex-row items-end gap-2 '>
  <FormField
  control={control}
  name={`menuItems.${index}.name`}
  render={({field})=>(
    <FormItem>
        <FormLabel>Name</FormLabel> <FormMessage/>
        <FormControl>
            <Input {...field} placeholder='Cheeze' className='bg-white'/>            
        </FormControl>
    </FormItem>
  )}    />
  <FormField
  control={control}
  name={`menuItems.${index}.price`}
  render={({field})=>(
    <FormItem>
        <FormLabel>Price </FormLabel> <FormMessage/>
        <FormControl>
            <Input {...field} placeholder='200'/>
        </FormControl>
    </FormItem>
  )}/>
  <Button onClick={removeMenuItem} className='bg-red-500 max-h-fit'>
    Remove
  </Button>
    </div>
  )
}
