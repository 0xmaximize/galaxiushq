import { Input, Button } from "@nextui-org/react";
import { useState, useMemo, useEffect } from 'react';
import { TwitterIcon } from "./TwitterIcon";

export function TwitterInput() {
    
  const [value, setValue] = useState('');

  const validateTwitter = (value) => {
    return value.match(/@[\w]{4,}/i);
  };

  const validationState = useMemo(() => {
    if (value === "") return undefined;

    return validateTwitter(value) ? "valid" : "invalid";
  }, [value]);

      return(
        <div  className=' flex gap-2 justify-center items-center'>
        <Input
        value={value}
        type="text"
        label=""
        placeholder='username (e.g @dappln)'
        variant="bordered"
        color={validationState === "invalid" ? "danger" : "success"}
        validationState={validationState}
        onValueChange={setValue}
        className="max-w-xs"
        /> 
          <Button size='sm' className='bg-[#34b4eb]' endContent={<TwitterIcon size='lg' />}>
          Follow 
        </Button>  
      </div>
      )

}