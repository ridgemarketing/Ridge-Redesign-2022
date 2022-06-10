import React, { useState, useMemo } from "react"
import { venn } from 'venny'

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
                {/* not react layouts, custom html tags */}
                <venn-diagram class="block w-min ml-auto mr-auto drop-shadow-lg">
                    <venn-set name="A" label=""></venn-set>
                    <venn-set name="B" label=""></venn-set>
                    <venn-n sets="A B" label=""></venn-n>
                </venn-diagram>
            </Container>
        </Section>
    )
}

export default vennDiagram