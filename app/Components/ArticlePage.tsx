"use client";
import Article from "./Article";

interface ArticleData {
    title: string;
    subtitle: string;
    author: string;
    image: string;
    content: string;
}

export default function ArticlePage() {
    const data: ArticleData[] = [
        {
            title: "title1",
            subtitle: "subtitle1",
            author: "author1",
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Image path relative to the `public` directory
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsam molestias dolore iusto dicta quia fugiat accusantium quam provident alias laudantium maxime nihil asperiores, dolorem, fugit impedit dignissimos corporis.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quod debitis incidunt cumque ex placeat ipsa laudantium eveniet veniam culpa optio at laboriosam autem voluptates voluptas, a voluptate id omnis molestias, ab quo fugiat deserunt voluptatem vero. Harum, magni fugiat eos totam excepturi aliquid assumenda minus? Aperiam ullam ratione nisi atque expedita accusamus est quidem at facilis! Doloremque, adipisci obcaecati? Temporibus ipsam amet eligendi quia iusto numquam error optio, enim deleniti sed harum, repudiandae velit autem nesciunt nostrum quidem. Architecto commodi ipsum excepturi minus quo minima quas inventore cumque doloremque aliquam quia nihil ex eos adipisci voluptatibus fuga temporibus, iure vero beatae modi eum voluptatem nobis ad. Unde amet beatae quae sunt, optio saepe numquam aperiam placeat quasi nemo esse officia. Quidem, suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique iure, molestiae ipsa repudiandae beatae dolorum officiis fugit et tempore! Ullam aspernatur natus ipsum accusamus repudiandae quibusdam, doloribus, deleniti explicabo ipsam dignissimos veniam culpa, quaerat saepe. Ipsum laboriosam exercitationem doloribus pariatur amet commodi illo sequi ullam vero, voluptatibus libero sit, eaque a molestias debitis itaque sunt, autem maiores alias tempore beatae voluptatum accusamus non officiis! Possimus, quo laudantium quasi eum a cumque explicabo nam cum quidem autem dicta, non vitae id omnis excepturi aut ex tenetur dolorum, harum beatae sunt libero ab. Culpa ipsa nam sed nesciunt aspernatur unde? Dicta sit amet doloribus quae similique obcaecati ipsam aut repudiandae corrupti nam omnis, magnam minima corporis? Inventore, vero. Animi enim inventore, cumque rerum nihil neque!" 
        },
        {
            title: "title2",
            subtitle: "subtitle2",
            author: "author2",
            image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsam molestias dolore iusto dicta quia fugiat accusantium quam provident alias laudantium maxime nihil asperiores, dolorem, fugit impedit dignissimos corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat nulla eaque voluptatibus eum incidunt quidem, fugiat est aperiam qui ratione sapiente! Numquam, odit in repudiandae blanditiis temporibus cum ad, sequi tempora asperiores animi expedita! Impedit consectetur aliquid earum cupiditate. Soluta eveniet dignissimos repellendus aut, magni blanditiis quas ad saepe delectus deleniti et atque reiciendis fugit molestiae labore modi obcaecati facere? Quam nam eos veniam mollitia voluptatibus reiciendis fugiat consequatur, nemo qui molestias ullam beatae fugit eaque molestiae assumenda voluptatem, repellat itaque nulla. Nisi eum eligendi quam nesciunt aperiam. Harum possimus ullam libero voluptates molestiae dolores repudiandae, quasi minima ipsam exercitationem beatae labore accusantium impedit iste, qui nihil. Provident quos amet veritatis et sapiente qui vero voluptatem id aliquid quis, consequuntur illo facere placeat eligendi harum animi laboriosam maiores. Libero reprehenderit explicabo numquam pariatur expedita itaque, sint harum odit, error corporis recusandae in! Ratione quod perspiciatis blanditiis quo! Accusantium corporis aliquid sed eligendi ut! Repellendus, modi aperiam aliquam dolorem quod iure incidunt quis? Placeat excepturi, ut officia a cumque ipsam dolorem vero aspernatur quaerat exercitationem magnam minima quam, nostrum nisi repudiandae laboriosam voluptatum ex! Est tempora aliquam error alias. Blanditiis, dolore! Assumenda voluptatum doloribus quaerat perferendis nihil fuga incidunt libero vel suscipit, officia voluptas facilis. Dignissimos earum reprehenderit nisi, tempora saepe ducimus repellat! Dolores, assumenda. Natus, cupiditate. Voluptatem rerum quam, cum eum similique quae sunt dolorem illum aspernatur corrupti ad possimus blanditiis vero, reiciendis facilis inventore voluptatum consequatur quidem nesciunt hic eveniet aut cupiditate minus eaque! Dolor sequi ipsa dicta aperiam distinctio, mollitia modi voluptates ab iste, fugiat corporis error maiores, laudantium voluptatibus. Eos perspiciatis molestias natus mollitia, fugit alias? Inventore necessitatibus odit beatae error. Necessitatibus corrupti numquam quasi pariatur vitae dolor aut? Unde, nihil? Repudiandae ullam totam porro quia error aliquam molestias placeat omnis quidem assumenda. Illo dignissimos itaque error aspernatur facilis incidunt atque quae, quam, vitae eos neque. Consequatur illo error facilis ad a tenetur quam magni. Eum nostrum voluptates voluptatem beatae enim. Expedita, praesentium vitae et veritatis sint cumque sunt officiis ratione incidunt numquam cupiditate alias ullam aperiam fuga nulla voluptatibus quibusdam mollitia. Nisi cupiditate possimus velit adipisci pariatur aspernatur omnis ea, in voluptate quidem placeat nostrum eos delectus voluptatem maxime esse provident facilis veritatis sit saepe ad est dolorum voluptatibus? Quaerat eos at consequuntur voluptatem. Error harum culpa tempore! Provident voluptates sint cumque soluta, est dolorum mollitia, itaque consequatur temporibus quos optio sed, quam explicabo corporis." 
        },
    ];

    return (
        <div>
            <Article data={data} />
        </div>
    );
}
