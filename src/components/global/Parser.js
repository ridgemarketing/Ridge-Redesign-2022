import { theme } from "../../static/theme";

const tagList = [
    {
        tag: `[b]`,
        replace: '<span style="font-weight: 700;">'
    },
    {
        tag: `[temp]`,
        replace: '<span style="font-weight: 600; font-size: 26px;">'
    },
    {
        tag: `[extra-slim]`,
        replace: '<span style="max-width: 976px; display:block;">'
    },
    {
        tag: `[green]`,
        replace: `<span class="text-rm-green font-semibold">`
    },
    {
        tag: `[accent]`,
        replace: `<span class="accent-text">`
    },
    {
        tag: `[secondary]`,
        replace: `<span class="secondary-text">`
    },
    {
        tag: `[white]`,
        replace: `<span class="text-white">`
    }, 
    {
        tag: `[br]`,
        replace:`<br>`
    }, 
    {
        tag: `[i]`,
        replace: `<span style="font-style:italic;">`
    }, 
    {
        tag:`[h2]`,
        replace:`<span style="display:block;" class="${theme.text.H2}">`
    },
    {
        tag:`[h4]`,
        replace:`<span style="display:block;" class="${theme.text.H4} mb-6 !normal-case">`
    },
    {
        tag:`[h5]`,
        replace:`<span style="display:block;" class="${theme.text.H5}">`
    }
];

const tagListBlog = [
    {
        tag: `<p>`,
        replace: `<p class="${theme.text.P_STD} mt-10">`
    },
    {
        tag:`<h2>`,
        replace:`<h2 class="${theme.text.H5} mt-10">`
    },
    {
        tag:`<h2 class="wp-block-heading">`,
        replace:`<h2 class="${theme.text.H5} mt-10">`
    },
    {
        tag:`<img`,
        replace:`<img class="mt-10 w-full max-w-[850px] ml-auto mr-auto"`
    },
    {
        tag:`<figure class="alignright`,
        replace:`<figure class="md:float-right clearfix md:ml-6 md:max-w-[40%]"`
    },
    {
        tag:`<figure class="alignleft`,
        replace:`<figure class="md:float-left clearfix md:mr-6 md:max-w-[40%]"`
    },
    {
        tag:`<hr class="`,
        replace:`<hr class="mt-10 `
    }, 
    {
        tag:`<ul>`,
        replace:`<ul style="list-style: disc; padding-left: 20px;"> <style>main li{margin-top:0.75rem;}</style>`,
    },
    {
        tag:`<a`,
        replace:`<a class="underline text-rm-blog-blue font-semibold"`
    }, 
    {
        tag:`<br>`,
        replace:` `,
    }, 
    {
        tag:`<h3 class="wp-block-heading">`,
        replace:`<h3 class="${theme.text.H4} mt-10">`
    },
    {
        tag:`<h3>`,
        replace:`<h3 class="${theme.text.H4} mt-10">`
    },
    {
        tag:`<h6 class="wp-block-heading">`, //intro text 
        replace:`<span class="font-basic-sans text-[1.625rem] leading-[1.875rem] font-bold">`,
    }, 
    {
        tag:`<h6>`, //intro text 
        replace:`<span class="font-basic-sans text-[1.625rem] leading-[1.875rem] font-bold">`,
    }, 
    {
        tag:`</h6>`,
        replace:`</span>`,
    },
    {   //wordpress editor 50/50 columns
        tag:`wp-block-columns`,
        replace:`block md:flex justify-between`,
    },
    {
        tag:`wp-block-column`,
        replace:`w-full md:w-[48%]`
    },
    {
        tag:`<blockquote class="wp-block-quote"><p`,
        replace:`<blockquote class="wp-block-quote"><p class=" text-rm-green text-[1.875rem] leading-[2rem] italic font-basic-sans font-normal mt-10"`
    },
    {
        tag:`<figcaption>`,
        replace:`<figcaption class="text-center">`
    },
    {
        tag:`[sup]`,
        replace:`<sup>`
    }
    ,
    {
        tag:`[/sup]`,
        replace:`</sup>`
    }
];

const Parser = (string, type = null) => {
    let output = string || "";
    output = output.replace(/\s*<script>.*?<\/script>\s*/g, ' ');
    if(type === 'blog'){
        output =  output.split('\n').filter(n => n);
        output = output.join("");
        tagListBlog.map(data =>(
            output = output.replaceAll(data.tag, data.replace)
        ))
    }else{      
        output = output.replace(/(\[\/\w+-*\w*\])/g, '</span>'); // replaces any closing tag: `[/ + (any amount of letters) + ]` with </span>
        tagList.map(data => (
            output = output.replaceAll(data.tag, data.replace)
        ));
    }
    return output;
}

export default Parser;