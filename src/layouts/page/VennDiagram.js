import React, { useState, useMemo } from "react"
import { extractSets, generateCombinations, VennDiagram } from '@upsetjs/react';

const vennDiagram = ({ props }) => {
    
    const elems = useMemo(
        () => [
          { name: '', sets: ['S1', 'S2'] },
          { name: '', sets: ['S1'] },
          { name: '', sets: ['S2'] },
        ],
        []
      ); 
    
      const sets = useMemo(() => extractSets(elems), [elems]);
      const combinations = useMemo(() => generateCombinations(sets), [sets]);
      
      const [selection, setSelection] = React.useState(null);
    
      return(
        <Section Settings={ settings }>
            <Container>
                <VennDiagram
                    sets={sets}
                    combinations={combinations}
                    width={780}
                    height={400}
                />
            </Container>
        </Section>
    )
}

export default vennDiagram