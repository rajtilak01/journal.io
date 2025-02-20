import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';
import { useState } from 'react';
import { Button } from './ui/button';
import apiClient from '@/lib/apiClient';

const content = '<p>How was your day?</p>';

export default function TipTap() {
  const [editorContent, setEditorContent] = useState(content);

  const editor = useEditor({
    extensions: [StarterKit, Underline, Highlight],
    content,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML()); // Update state whenever content changes
    },
  });

  const handleSubmit = async () => {
    console.log("Sending data:", editorContent);
    try {
      const result = await apiClient.post('/create-journal', { content: editorContent });
      console.log("Result after sending data:", result);
      alert("Journal saved!");
    } catch (error) {
      console.log("error occurred during api call", error);
      alert("Error occurred while saving journal!");
    }
  };
  
  return (
    <>
    <RichTextEditor
    editor={editor}
    variant="subtle"
          styles={{
            root: {
              backgroundColor: 'gray',
              height: '90%',
            },
            content: {
              color: 'white',
              height: '100%',
            },  
          }}
        >
          <RichTextEditor.Toolbar>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
              <RichTextEditor.Highlight />
              <RichTextEditor.Code />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>
    
          <RichTextEditor.Content style={{ height: '93%' }} />
        </RichTextEditor>
        <div className='flex justify-end'>

                  <Button onClick={handleSubmit} className='flex mt-4 justify-end'>
                    Save Journal
                  </Button>
        </div>
            </>
      );
}
