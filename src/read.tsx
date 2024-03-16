import React, { useState, useEffect } from 'react';
import './App.css';
import './read.css';

import { readContract } from '@wagmi/core';
import { abi } from './abi.ts';
import { config } from './config';

import { type ReadContractReturnType } from '@wagmi/core';
import { mainnet, sepolia } from 'wagmi/chains';

export async function Readconstract() {
    const [totalSupply, setTotalSupply] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await readContract(config, {
                    abi,
                    address: '0xA28066f2B5627E61872e1c92Ef3AaB64D95df65A',
                    functionName: 'totalSupply',
                    args: [],
                    chainId: sepolia.id,
                });
               console.log(result); setTotalSupply(Number(result));
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect will only run once after initial render

    return (
        <>
            <div className='display-container'>

                <h1>TotalSupply: Use {totalSupply ? totalSupply : "loading..."}</h1> {/* Display totalSupply if available */}
            </div>
        </>
    );
}