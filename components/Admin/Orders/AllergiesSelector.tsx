import React, {useState} from 'react';
import {Chip, FormControl, FormLabel, MenuItem, Select} from "@material-ui/core";

function AllergiesSelector(props: any) {
    const allergies = [
        'Gluten',
        'Fish',
        'Nuts'
    ]

    const [selectedAllergies, setSelectedAllergies] = useState<string[]>([])

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedAllergies(event.target.value as string[]);
    };

    return (
        <div>
            <FormControl>
                <FormLabel>Allergies</FormLabel>
                <Select
                    id={'allergies'}
                    multiple
                    onChange={handleChange}
                    value={selectedAllergies}
                    renderValue={(selected) => (
                        <div>
                            {(selected as string[]).map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </div>
                    )}
                >
                    {allergies.map((allergy) => (
                        <MenuItem key={allergy} value={allergy}>
                            {allergy}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default AllergiesSelector;