<template>
    <div style="border: 1px solid #ccc; margin-top: 10px">
        <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode"
            style="border-bottom: 1px solid #ccc" />
        <Editor :defaultConfig="editorConfig" :mode="mode" v-model="valueHtml" style="height: 400px; overflow-y: hidden"
            @onCreated="handleCreated" @onChange="handleChange" @onDestroyed="handleDestroyed" @onFocus="handleFocus"
            @onBlur="handleBlur" @customAlert="customAlert" @customPaste="customPaste" />
    </div>
    <!-- <div style="margin-top: 10px">
        <textarea v-model="valueHtml" readonly style="width: 100%; height: 200px; outline: none"></textarea>
    </div> -->
</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
    name: 'GoodsEditor',
    emits: ['contentChange'],
    components: {
        Editor, Toolbar
    },
    data() {
        return {
            editor: null,
            html: '',
            mode: 'default', // or 'simple'
            toolbarConfig: {},
            editorConfig: { placeholder: '请输入内容...' },

        }
    },
    setup(_, { emit }) {
        // 文档地址：https://www.wangeditor.com/v5/for-frame.html#%E4%BD%BF%E7%94%A8-1
        // 编辑器实例，必须用 shallowRef，重要！
        const editorRef = shallowRef();
        // 初始内容
        const initContent = '<p>请输入内容....</p>'
        // 内容 HTML
        const valueHtml = ref('');

        // 模拟 ajax 异步获取内容
        onMounted(() => {
            setTimeout(() => {
                valueHtml.value = initContent;
            }, 1500);
        });

        // 组件销毁时，也及时销毁编辑器，重要！
        onBeforeUnmount(() => {
            const editor = editorRef.value;
            if (editor == null) return;

            editor.destroy();
        });

        // 编辑器回调函数
        const handleCreated = (editor) => {
            console.log('created', editor);
            editorRef.value = editor; // 记录 editor 实例，重要！
        };
        const handleChange = (editor) => {
            console.log('change:', editor.getHtml());
            emit('contentChange', editor.getHtml());
        };
        const handleDestroyed = (editor) => {
            console.log('destroyed', editor);
        };
        const handleFocus = (editor) => {
            console.log('focus', editor);
            if (editor.getHtml() == initContent) {
                // 清空初始内容
                editor.clear()
            }
        };
        const handleBlur = (editor) => {
            console.log('blur', editor);
        };
        const customAlert = (info, type) => {
            alert(`【自定义提示】${type} - ${info}`);
        };
        const customPaste = (editor, event, callback) => {
            console.log('ClipboardEvent 粘贴事件对象', event);

            // 自定义插入内容
            editor.insertText('xxx');

            // 返回值（注意，vue 事件的返回值，不能用 return）
            callback(false); // 返回 false ，阻止默认粘贴行为
            // callback(true) // 返回 true ，继续默认的粘贴行为
        };

        const insertText = () => {
            const editor = editorRef.value;
            if (editor == null) return;

            editor.insertText('hello world');
        };


        return {
            editorRef,
            valueHtml,
            handleCreated,
            handleChange,
            handleDestroyed,
            handleFocus,
            handleBlur,
            customAlert,
            customPaste,
            insertText,
        };
    },
}
</script>