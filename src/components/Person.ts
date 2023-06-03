import { useState } from "react";

export type PersonProps = {
    firstName: string, setFirstName: (value: string) => void,
    lastName: string, setLastName: (value: string) => void,
}
