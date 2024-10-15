'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import {
  atomDark,
  dracula,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlockWithCopy = ({
  language,
  code,
}: {
  language: string;
  code: string;
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <Button
          variant='outline'
          size='sm'
          style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            // borderRadius: "7px",
            // padding: "3px 6px",
          }}
        >
          {copied ? (
            <Check className='h-3 w-3' />
          ) : (
            <Copy className='h-3 w-3' />
          )}
        </Button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language || 'text'} style={atomDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlockWithCopy;
