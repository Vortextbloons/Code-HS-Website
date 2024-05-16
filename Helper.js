// Reusable functions for the CodeHS website
export function createHTML(tag, content, appendChildTo) {
    const element = document.createElement(tag);
    element.innerHTML = content;
    appendChildTo.appendChild(element);
}
// Lay Out For createHTML_Muti
export const Test_Info = {
    Tag: [
        {
            Tag: "div",
            Class: "Test_Class",
        },
        {
            Tag: "h1",
            Class: "Test_Class",

        },
        {
            Tag: "p",
            Class: "Test_Class",
        }
    ],
    // tags and content will share the smae index
    Content: [
        {
            Content: "Test Content",
        },
        {
            Content: "Test Content",
        },
        {
            Content: "Test Content",
        }


    ],
}
// funtion to create multiple html element object
export function createHTML_Object(Tag, Content, Class = null) {
    if (Class == null) {
        return {
            Tag: Tag,
            Content: Content
        }
    }

    else if (Class != null) {
        return {
            Tag: Tag,
            Content: Content,
            Class: Class

        }
    }
}
// funtion to create multiple html element object
export function createMultipleHTML_Object(Tag_list, Content_list, Class = null) {
    const tag_length = Tag_list.length;
    const content_length = Content_list.length;
    if (tag_length === content_length) {
        let Element_List = [];
        for (let i = 0; i < Tag_list.length; i++) {
            const temp_element = createHTML_Object(Tag_list[i], Content_list[i], Class);
            Element_List.push(temp_element);
        }
        return Element_List;
    } else {
        console.error("The length of the Tag_list, Content_list, and Class_list must be the same");
    }
}
// funtion to add mutiple elements to the DOM
export function createHTML_Muti(Tag_Object, Content_Object, appendChildTo, Class = null) {
    for (let i = 0; i < Tag_Object.length; i++) {
        const element = document.createElement(Tag_Object[i].Tag);
        element.innerHTML = Content_Object[i].Content;
        if (Class != null) {
            appendChildTo.appendChild(element);
            element.classList.add(Class);
            return
        }
        else {
            appendChildTo.appendChild(element);
        }
        
    }
}
// funtion to remove elements except a specific element
export function remove_elements_except(element_list, target_tag, Pass_in_element = false) {
    if (Pass_in_element = false) {
        const elements = document.querySelectorAll(target_tag);
        for (let i = 0; i < elements.length; i++) {
            if (!element_list.includes(elements[i])) {
                elements[i].remove()
            }
        }
    }
}
const test = (createMultipleHTML_Object(Test_Info.Tag, Test_Info.Content, 'Test_Class'))
console.log(test)