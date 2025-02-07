import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

const content = '<p>How was your day?</p>';

export default function TipTap() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Highlight],
    content,
  });

  return (
    <RichTextEditor
      editor={editor}
      variant="subtle"
      styles={{
        root: {
          backgroundColor: 'gray',
          height: '100%',
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

      <RichTextEditor.Content style={{ height: '100%' }} />
    </RichTextEditor>
  );
}