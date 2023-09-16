import { useInput } from "@nextui-org/react";

export function discordValue() {
    const validateEmail = (value) => {
        return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
      };
      
      const validateId = (value) => {
        return value.match(/\w+#\d{4}/i);
      };
      
      // Export the functions
      module.exports = {
        validateEmail,
        validateId
      };

}