import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Hello from "@/components/Hello.vue";

describe("Hello", () => {
  it("Montagem do componente", () => {
    const wrapper = mount(Hello, {
      props: {
        msg: "teste",
      },
    });
    expect(wrapper).toBeTruthy();
  });
  it("Testando passar parametro", () => {
    const wrapper = mount(Hello, {
      props: {
        msg: "teste",
      },
    });
    expect(wrapper.text()).toContain("teste");
  });
  it.todo("Teste para .....");
});
