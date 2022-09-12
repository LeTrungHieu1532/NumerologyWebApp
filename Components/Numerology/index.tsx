import { FC, useDeferredValue, useState } from "react";
import moment from "moment";
import { Box, Heading, Input, VStack } from "../";
import { Numerology as NumerologyTxt } from "../../Utils/constaints";

export const Numerology: FC = () => {
   const [name, setName] = useState<string>("");
   const [birth, setBirth] = useState<string>("");
   const deferredName = useDeferredValue(name);
   const deferredBirth = useDeferredValue(birth);
   return (
      <Box>
         <Heading textAlign="center">{NumerologyTxt}</Heading>
         <Box as="br" />
         <VStack spacing={2} align="stretch">
            <Box h="40px" bg="gray.50">
               <Input
                  autoFocus
                  placeholder="Nhập họ tên đầy đủ"
                  w={{ md: "50%", xs: "100%" }}
                  onChange={(e) => setName(e.target.value)}
               />
            </Box>
            <Box bg="gray.50">
               <Input
                  autoFocus
                  type="date"
                  placeholder="Ngày tháng năm sinh"
                  w={{ md: "50%", xs: "100%" }}
                  defaultValue={moment().format("YYYY-MM-DD")}
                  onChange={(e) => setBirth(e.target.value)}
               />
            </Box>
         </VStack>
      </Box>
   );
};
